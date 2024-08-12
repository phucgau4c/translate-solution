import { useTranslations } from "next-intl";

export default function Page(){
  
  const t = useTranslations('ThirdPage');

  return (
    <div>{t('title')}</div>
  )

}