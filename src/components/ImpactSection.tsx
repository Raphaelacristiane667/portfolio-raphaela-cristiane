"use client";

import { motion } from "framer-motion";
import { Building2, Layers, Code2, Plug } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const IMPACT_ITEMS = [
  { icon: Building2, valueKey: "impact.item1.value", labelKey: "impact.item1.label" },
  { icon: Layers, valueKey: "impact.item2.value", labelKey: "impact.item2.label" },
  { icon: Code2, valueKey: "impact.item3.value", labelKey: "impact.item3.label" },
  { icon: Plug, valueKey: "impact.item4.value", labelKey: "impact.item4.label" },
] as const;

export default function ImpactSection(): React.ReactElement {
  const { t } = useLanguage();

  return (
    <section className="impact-section" aria-labelledby="impact-heading">
      <div className="container-custom">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="impact-heading" className="impact-section__title">
            {t("impact.title")}
          </h2>
          <div className="impact-grid">
            {IMPACT_ITEMS.map((item, index) => (
              <motion.article
                key={item.labelKey}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="impact-card"
              >
                <span className="impact-card__icon" aria-hidden>
                  <item.icon size={22} />
                </span>
                <span className="impact-card__value">{t(item.valueKey)}</span>
                <span className="impact-card__label">{t(item.labelKey)}</span>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
