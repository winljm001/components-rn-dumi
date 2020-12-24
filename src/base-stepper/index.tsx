import React, { useState, useEffect } from 'react';
import {
  Image,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  IconAdd,
  IconAddDisable,
  IconReduce,
  IconReduceDisable,
} from './images/index';

interface IProp {
  min?: number;
  max?: number;
  value?: number;
  step?: number;
  onChange?: (value: any) => void;
}

const Index: React.FC<IProp> = ({
  onChange,
  value = 0,
  min = 0,
  max = 9999999999,
  step = 1,
}) => {
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);
  const [currentValue, setCurrentValue] = useState(0);
  const textValue =
    typeof currentValue === 'number' ? currentValue.toString() : currentValue;
  const addUnable = Number(textValue) === max;
  const minusUnable = Number(textValue) === 0;
  const onInputChange = (v: any) => {
    setCurrentValue(v);
    onChange && onChange(v);
  };
  // 失去焦点验证数字，不正确则设置为0
  const onBlur = () => {
    const currentNum = Number(currentValue);
    let resNum = currentNum;
    if (isNaN(currentNum)) {
      resNum = 0;
    }
    if (currentNum < min && currentNum !== 0) {
      resNum = min;
    }
    if (currentNum > max) {
      resNum = max;
    }
    if (currentNum !== resNum) {
      setCurrentValue(resNum);
      onChange && onChange(resNum);
    }
  };
  const minus = () => {
    if (minusUnable) {
      return false;
    }
    let resNum = Number(currentValue) - step;
    if (resNum < min) {
      if (currentValue > min) {
        resNum = min;
      } else {
        resNum = 0;
      }
    }
    setCurrentValue(resNum);
    onChange && onChange(resNum);
  };
  const add = () => {
    if (addUnable) {
      return false;
    }
    let resNum = Number(currentValue) + step;
    if (currentValue === 0 && min !== 0) {
      resNum = min;
    }
    if (resNum > max) {
      resNum = max;
    }
    setCurrentValue(resNum);
    onChange && onChange(resNum);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={minus} activeOpacity={0.8}>
        <Image
          style={styles.minus}
          source={minusUnable ? IconReduceDisable : IconReduce}
        />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        keyboardType={'numeric'}
        onBlur={onBlur}
        onChangeText={e => {
          onInputChange(e);
        }}
        value={textValue}
      />
      <TouchableOpacity onPress={add} activeOpacity={0.8}>
        <Image
          style={styles.add}
          source={addUnable ? IconAddDisable : IconAdd}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    width: 132,
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  input: {
    flex: 1,
    height: 36,
    textAlign: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d3d3d3',
    paddingTop: 0,
    paddingBottom: 0,
  },
  add: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  minus: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
