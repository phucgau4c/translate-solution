import { useTranslations } from "next-intl"

export default function Page(){


  const t = useTranslations('SecondPage')

  return (
    <div>
      {t('title')}
    </div>
  )
}