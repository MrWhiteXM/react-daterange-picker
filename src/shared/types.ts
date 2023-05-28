export type Range<T> = [T, T];

export type ClassName = string | null | undefined | (string | null | undefined)[];

export type CloseReason = 'buttonClick' | 'escape' | 'outsideAction' | 'select';

export type Detail = 'century' | 'decade' | 'year' | 'month';

type LooseValuePiece = string | Date | null;

export type LooseValue = LooseValuePiece | Range<LooseValuePiece>;

export type OpenReason = 'buttonClick' | 'focus';

export type RangeType = 'century' | 'decade' | 'year' | 'month' | 'day';

type ValuePiece = Date | null;

export type Value = ValuePiece | Range<ValuePiece>;
