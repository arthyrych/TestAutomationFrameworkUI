export const phones = {
  Australia: { fullPhone: "+61262959474", code: "+61", phone: "262959474" },
  Austria: { fullPhone: "+432274820482", code: "+43", phone: "2274820482" },
  Belgium: { fullPhone: "+3223743400", code: "+32", phone: "23743400" },
  Canada: { fullPhone: "+16132361413", code: "+1", phone: "6132361413" },
  Denmark: { fullPhone: "+4535382370", code: "+45", phone: "35382370" },
  Finland: { fullPhone: "+358045123456", code: "+358", phone: "045123456" },
  Germany: { fullPhone: "+4930182424242", code: "+49", phone: "30182424242" },
  Greece: { fullPhone: "+306941234567", code: "+30", phone: "6941234567" },
  Iceland: { fullPhone: "+3548123456", code: "+354", phone: "4123456" },
  Ireland: { fullPhone: "+353016028000", code: "+353", phone: "016028000" },
  Italy: { fullPhone: "+390578269404", code: "+39", phone: "0578269404" },
  Netherlands: { fullPhone: "+31703468888", code: "+31", phone: "703468888" },
  NewZealand: { fullPhone: "+6479745595", code: "+64", phone: "79745595" },
  Norway: { fullPhone: "+4722835560", code: "+47", phone: "22835560" },
  Poland: { fullPhone: "+48426384444", code: "+48", phone: "426384444" },
  Portugal: { fullPhone: "+351218462423", code: "+351", phone: "218462423" },
  Spain: { fullPhone: "+34915622264", code: "+34", phone: "915622264" },
  Sweden: { fullPhone: "+46081234567", code: "+46", phone: "081234567" },
  Switzerland: { fullPhone: "+41441234567", code: "+41", phone: "0229172122" },
  UnitedKingdom: { fullPhone: "+442012345678", code: "+44", phone: "2012345678" }
}

// Use "fullPhone" or "phone" as a property for generation
export function generateUniquePhone(geoName, property) {
  const phone = phones[geoName]?.[property]

  // Get the UNIX timestamp in milliseconds and extract 6 digits
  const timestamp = Date.now().toString()
  const uniqueSuffix = timestamp.slice(3, 9)

  // Replace the last 6 digits of the fullPhone with the uniqueSuffix
  const uniquePhone = phone.slice(0, -6) + uniqueSuffix

  return uniquePhone
}
