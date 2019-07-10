const schema = 'interxmarc'
const createItemPseudoId = require('./create_item_pseudo_id')
const addDatafieldClaims = require('./add_datafield_claims')
const addControlfieldClaims = require('./add_controlfield_claims')
const addLeaderClaims = require('./add_leader_claims')

module.exports = notice => {
  const { datafield: datafields, controlfield: controlfields, leader } = notice

  const field100 = getFirstField(datafields, '100')
  const itemPseudoId = createItemPseudoId(field100)

  const item = {
    pseudoId: itemPseudoId,
    aliases: {},
    claims: {}
  }

  addDatafieldClaims(schema, item.claims, datafields)
  addControlfieldClaims(schema, item.claims, controlfields)
  addLeaderClaims(schema, item.claims, leader)
  addAlias(item.aliases, itemPseudoId, 'fr')

  return item
}

const addAlias = (aliases, itemPseudoId, lang) => {
  aliases[lang] = itemPseudoId
}

const getFirstField = (fields, code) => {
  const fieldsByCode = getFields(fields, code)
  return fieldsByCode[0]
}
const getFields = (fields, code) => {
  return fields.filter(field => field.tag === code)
}
