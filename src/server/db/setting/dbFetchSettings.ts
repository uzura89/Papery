import { CONS_SETTING_THEME_LIGHT } from "../../../common/constants/setting.cons";
import { SettingType } from "../../../common/types/setting.types";

export async function dbFetchSettings(
  mongoose: any,
  userParmId: string
): Promise<SettingType> {
  const Setting = mongoose.model("Setting");

  try {
    // fetch setting
    const setting = await Setting.findOne({ userParmId }).lean();

    const settingToReturn: SettingType = {
      theme:
        setting && setting.theme ? setting.theme : CONS_SETTING_THEME_LIGHT,
      textSearchEnabled:
        setting && typeof setting.textSearchEnabled === "boolean"
          ? setting.textSearchEnabled
          : false,
      emojiPalette: setting && setting.emojiPalette ? setting.emojiPalette : "",
    };

    // return
    return settingToReturn;
  } catch (error) {
    throw error;
  }
}
