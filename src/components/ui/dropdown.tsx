"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface DropdownProps {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  items: DropdownItem[];
  pathname: string;
  onItemClick?: () => void;
}

export function Dropdown({
  name,
  icon: Icon,
  items,
  pathname,
  onItemClick,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleItemClick = () => {
    setIsOpen(false);
    onItemClick?.();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
          "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        )}
      >
        <Icon className="w-4 h-4" />
        <span>{name}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          {items.map((item) => {
            const ItemIcon = item.icon;
            const isActive = pathname === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-colors first:rounded-t-lg last:rounded-b-lg",
                  isActive
                    ? "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
                onClick={handleItemClick}
              >
                <ItemIcon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Mobile Dropdown Component
interface MobileDropdownProps {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  items: DropdownItem[];
  pathname: string;
  onItemClick?: () => void;
}

export function MobileDropdown({
  name,
  icon: Icon,
  items,
  pathname,
  onItemClick,
}: MobileDropdownProps) {
  return (
    <div>
      <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-300">
        <Icon className="w-4 h-4" />
        <span>{name}</span>
      </div>
      <div className="ml-6 space-y-1">
        {items.map((item) => {
          const ItemIcon = item.icon;
          const isActive = pathname === item.href;

          return (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
              onClick={onItemClick}
            >
              <ItemIcon className="w-4 h-4" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
