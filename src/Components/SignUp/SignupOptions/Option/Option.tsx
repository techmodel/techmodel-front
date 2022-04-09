import { ProfileFieldsParams } from '../../../../Types/ProfileParams.types';
import * as s from './Option.styles';

const Option = ({ option }: { option: any }) => {
  return (
    <s.Option>
      <img src={option.image} alt={option.title} />
      <div>
        <h3>{option.title}</h3>
        <p>{option.description}</p>
      </div>
    </s.Option>
  );
};
export default Option;
