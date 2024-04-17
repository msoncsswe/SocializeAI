import { Text, TextInput, View } from 'react-native';
import useState from 'react';

export default function Feed() {
  const [text, setText] = useState('');
  return (
    <View>
      <Text>What is your name?</Text>
      <TextInput placeholder="Write your name here..." returnKeyType="done" onSubmitEditing={(e) => setText(e.text) }/>
    </View>
  )
}