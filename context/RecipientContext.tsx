"use client";

import React, { createContext, useContext, useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { RELATIONSHIPS, GROUP_WISHES, generatePersonalWish } from "@/lib/wishesData";

export interface RecipientInfo {
  name: string;
  role: string;
  displayName: string;
  pronoun: string;
  prefix: string;
  hasCustomRecipient: boolean;
  personalWish: string;
  isCreatorMode: boolean;
  setCreatorMode: (mode: boolean) => void;
  updateRecipient: (newName: string, newRole: string) => void;
}

const RecipientContext = createContext<RecipientInfo | null>(null);

function matchRoleFromQuery(rawAs: string): string {
  if (!rawAs) return "Người yêu";
  const normalized = rawAs.trim().toLowerCase();

  // Check aliases from GROUP_WISHES
  for (const group of GROUP_WISHES) {
    if (
      group.role.toLowerCase() === normalized ||
      group.roleAlias.some(
        (alias) => alias.toLowerCase() === normalized || normalized.includes(alias.toLowerCase())
      )
    ) {
      // Map to matching RELATIONSHIPS id
      const matched = RELATIONSHIPS.find((r) =>
        r.id.toLowerCase().includes(group.role.toLowerCase()) ||
        group.role.toLowerCase().includes(r.id.toLowerCase())
      );
      if (matched) return matched.id;
    }
  }

  // Check RELATIONSHIPS id
  const direct = RELATIONSHIPS.find((r) => r.id.toLowerCase() === normalized);
  if (direct) return direct.id;

  return "Người yêu";
}

export function RecipientProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();

  // Read URL params ?to=...&as=...
  const rawTo = searchParams?.get("to") || "";
  const rawAs = searchParams?.get("as") || "";

  const detectedRole = useMemo(() => matchRoleFromQuery(rawAs), [rawAs]);

  const [customName, setCustomName] = useState<string>(rawTo);
  const [customRole, setCustomRole] = useState<string>(rawAs ? detectedRole : "");
  const [isCreatorMode, setCreatorMode] = useState<boolean>(false);

  const activeName = (customName || rawTo).trim();
  const activeRole = customRole || detectedRole;

  const currentRel =
    RELATIONSHIPS.find((r) => r.id === activeRole) || RELATIONSHIPS[0];

  const hasCustomRecipient = Boolean(activeName || rawAs);

  // Exquisite display name crafted warmly
  const displayName = useMemo(() => {
    const clean = activeName.trim();

    if (activeRole === "Người yêu") {
      if (!clean || clean.toLowerCase() === "em" || clean.toLowerCase() === "em yêu") {
        return "Em Yêu";
      }
      return clean.toLowerCase().startsWith("em") ? clean : `Em Yêu ${clean}`;
    }

    if (activeRole === "Mẹ") {
      if (!clean || clean.toLowerCase() === "mẹ") return "Mẹ Kính Yêu";
      return clean.toLowerCase().startsWith("mẹ") ? clean : `Mẹ ${clean}`;
    }

    if (activeRole === "Dì") {
      if (!clean || clean.toLowerCase() === "dì") return "Dì Thân Thương";
      return clean.toLowerCase().startsWith("dì") ? clean : `Dì ${clean}`;
    }

    if (activeRole === "Em") {
      if (!clean || clean.toLowerCase() === "em") return "Em Gái Bé Nhỏ";
      return clean.toLowerCase().startsWith("em") ? clean : `Em ${clean}`;
    }

    if (activeRole === "Bạn") {
      if (!clean || clean.toLowerCase() === "bạn") return "Người Bạn Tri Kỷ";
      return clean.toLowerCase().startsWith("bạn") ? clean : `Bạn ${clean}`;
    }

    if (activeRole === "Chị") {
      if (!clean || clean.toLowerCase() === "chị") return "Chị Gái Yêu Quý";
      return clean.toLowerCase().startsWith("chị") ? clean : `Chị ${clean}`;
    }

    if (activeRole === "Bà") {
      if (!clean || clean.toLowerCase() === "bà") return "Bà Kính Yêu";
      return clean.toLowerCase().startsWith("bà") ? clean : `Bà ${clean}`;
    }

    if (!clean) return currentRel.label;
    return clean.toLowerCase().startsWith(currentRel.prefix.toLowerCase())
      ? clean
      : `${currentRel.prefix} ${clean}`;
  }, [activeName, activeRole, currentRel]);

  const personalWish = useMemo(() => {
    return generatePersonalWish(activeName, activeRole);
  }, [activeName, activeRole]);

  const updateRecipient = (newName: string, newRole: string) => {
    setCustomName(newName);
    setCustomRole(newRole);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (newName.trim()) {
        url.searchParams.set("to", newName.trim());
      } else {
        url.searchParams.delete("to");
      }
      url.searchParams.set("as", newRole);
      window.history.replaceState({}, "", url.toString());
    }
  };

  const value: RecipientInfo = {
    name: activeName,
    role: activeRole,
    displayName,
    pronoun: currentRel.pronoun,
    prefix: currentRel.prefix,
    hasCustomRecipient,
    personalWish,
    isCreatorMode,
    setCreatorMode,
    updateRecipient,
  };

  return (
    <RecipientContext.Provider value={value}>
      {children}
    </RecipientContext.Provider>
  );
}

export function useRecipient(): RecipientInfo {
  const context = useContext(RecipientContext);
  if (!context) {
    return {
      name: "",
      role: "Người yêu",
      displayName: "Em Yêu",
      pronoun: "em",
      prefix: "Em Yêu",
      hasCustomRecipient: false,
      personalWish: generatePersonalWish("", "Người yêu"),
      isCreatorMode: false,
      setCreatorMode: () => {},
      updateRecipient: () => {},
    };
  }
  return context;
}
