import type {LinkListItem} from "../types/linklistitem";
import {db} from "./db.ts";
import {type Tables} from "../types/database.ts";

export const getLinks = async (): Promise<LinkListItem[]> => {
    const {data} = await db.from('links').select()
    const linkListItems: Tables<'links'>[] = data ?? []

    return linkListItems.map((linkListItem) => ({
      id: linkListItem.id,
      title: linkListItem.title,
      url: linkListItem.url,
      icon: linkListItem.icon,
      iconBackgroundColor: linkListItem.icon_background_color,
      textColor: linkListItem.text_color,
      backgroundColor: linkListItem.background_color,
      borderColor: linkListItem.border_color,
    }))
}