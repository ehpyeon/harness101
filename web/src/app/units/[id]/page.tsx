import { notFound } from "next/navigation";
import { getUnit, getNextUnit, getPrevUnit, getUnitIndex, UNITS } from "@/lib/units";
import { getUnitContent, splitContentSections } from "@/lib/content";
import UnitPageClient from "@/components/UnitPageClient";
import KeyboardNav from "@/components/KeyboardNav";

export async function generateStaticParams() {
  return UNITS.map((u) => ({ id: u.id }));
}

export default async function UnitPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const unit = getUnit(id);
  if (!unit) notFound();

  const stepNumber = getUnitIndex(id) + 1;
  const prevUnit = getPrevUnit(id);
  const nextUnit = getNextUnit(id);

  // Load both KO and EN content at build time
  const [koHtml, enHtml] = await Promise.all([
    getUnitContent(unit.file, "ko"),
    getUnitContent(unit.file, "en"),
  ]);

  const koContent = splitContentSections(koHtml, "ko");
  const enContent = splitContentSections(enHtml, "en");

  return (
    <>
      {/* Keyboard navigation (← →) */}
      <KeyboardNav prevId={prevUnit?.id} nextId={nextUnit?.id} />

      <UnitPageClient
        unit={unit}
        koContent={koContent}
        enContent={enContent}
        stepNumber={stepNumber}
        prevUnit={prevUnit}
        nextUnit={nextUnit}
      />
    </>
  );
}
