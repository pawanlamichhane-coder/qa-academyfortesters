export type { Module, Lesson, QuizQuestion } from "./curriculum";
import type { Module } from "./curriculum";
import { module1 } from "./modules/module01";
import { module2 } from "./modules/module02";
import { module3 } from "./modules/module03";
import { module4 } from "./modules/module04";
import { module5, module6, module7, module8, module9 } from "./modules/modules5to9";
import { module10 } from "./modules/module10";
import { module11 } from "./modules/module11";
import { module12, module13, module14, module15 } from "./modules/modules12to15";
import { module16, module17, module18 } from "./modules/modules16to18";
import { module19 } from "./modules/module19";

export const modules: Module[] = [
  module1, module2, module3, module4, module5, module6,
  module7, module8, module9, module10, module11, module12,
  module13, module14, module15, module16, module17, module18, module19,
];

export function getModule(idOrSlug: string | number): Module | undefined {
  if (typeof idOrSlug === "number") return modules.find(m => m.id === idOrSlug);
  return modules.find(m => m.slug === idOrSlug || m.id === Number(idOrSlug));
}
