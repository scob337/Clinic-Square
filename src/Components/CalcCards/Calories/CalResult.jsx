import { useTranslation } from "react-i18next";

export default function CalResult({ Cal }) {
  const { t } = useTranslation();

  return (
    <div>
      <p className="font-bold">
        {t("Your caloric need per day")} = <strong>{Cal.toFixed(2)} {t("Calorie / day")}</strong>
      </p>
    </div>
  );
}
