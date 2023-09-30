import { Text } from '@components/common/texts/typography/Typography';

interface Props {
    isRequired?: boolean,
    text: string;
    forInput: string;
}

export const InputLabel = ({text, isRequired, forInput}: Props) => (
    <label htmlFor={forInput}>
        <Text font='bodyMedium'>{isRequired ? text + '*' : text}</Text>
    </label>);