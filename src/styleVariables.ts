import styleVariables from './style/variables.scss'
import appStyles from '../components/layout/App.module.scss'

const { baseFontSize, ...computedStyleVariables } = styleVariables
const remPx = parseFloat(baseFontSize)
const parseRemToPx = (rem: string) =>
    parseFloat(rem) * remPx
const delimiterToRegExp = (delimiter: string) =>
    new RegExp(`\\s*${delimiter}\\s*`)
const valuesDelimiter = delimiterToRegExp(',')
const typeDelimiter = delimiterToRegExp('-')
const parsers = {
    px: parseFloat,
    ms: parseFloat,
    rem: parseRemToPx,
    default: (value: string): string => value,
}
const isValidParser = (type: string): type is keyof typeof parsers =>
    type in parsers
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const parsedStyleVariables = {} as { [key in keyof typeof computedStyleVariables]: any }
const sourceStyleVariables = {} as { [key in keyof typeof computedStyleVariables]: string | string[] }

for (const key in computedStyleVariables) {
    const castedKey = key as keyof typeof computedStyleVariables
    const [rawType, ...values] = styleVariables[castedKey].split(valuesDelimiter)
    const [type, iteratorType] = rawType.split(typeDelimiter)
    const parser = isValidParser(type) ? parsers[type] : parsers.default
    const computedValues = values.map((value: any) => parser(value)) as string[] | number[]

    [parsedStyleVariables[castedKey], sourceStyleVariables[castedKey]] =
        iteratorType === 'list' ?
            [computedValues, values] :
            [computedValues[0], values[0]]
}

export const getColorById = (colorId: number) =>
    (parsedStyleVariables.colorScheme as [])[colorId - 1] as string

export const getColorClassById = (colorId: number | undefined) =>
    colorId == null ? null : appStyles[`color${colorId}` as keyof typeof appStyles]

export const withOpacity = (color: string, opacity: number) => {
    const alphaHex = Math.max(0, Math.min(256, Math.floor(256 * opacity))).toString(16)
    const computedColor = color + alphaHex

    return computedColor
}

export { parsedStyleVariables, sourceStyleVariables }

export default parsedStyleVariables