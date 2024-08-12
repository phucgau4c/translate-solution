"use client"

import {  usePathname } from "@/navigation";
import { useLocale } from "next-intl"
import { ChangeEvent } from "react";


export default function LocaleSwitcher(){
  const currentLocale = useLocale();
  const pathName = usePathname();


  function changeHandler(e: ChangeEvent<HTMLSelectElement>){
    const nextLocale = e?.target?.value;
    window.location.href = `/${nextLocale}${pathName}`
  }

  return <select defaultValue={currentLocale} onChange={changeHandler}>
    <option value="en">en</option>
    <option value="vi">vi</option>
  </select>
}