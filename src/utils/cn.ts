type ClassValue = string | number | boolean | undefined | null;
type ClassArray = ClassValue[];
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ClassDictionary = Record<string, any>;
type ClassProp = ClassValue | ClassArray | ClassDictionary;

export function cn(...inputs: ClassProp[]): string {
  const classes = inputs.filter(Boolean);
  return classes.join(" ");
}
