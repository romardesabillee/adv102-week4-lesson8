import { View, TextInput, Text, Pressable, Button } from "react-native"

export default function Login() {

    return (
        <View>
            <Text>Login</Text>
            <View>
                <Text>Email</Text>
                <TextInput placeholder="Enter your email" />
            </View>
            <View>
                <Text>Password</Text>
                <TextInput secureTextEntry={true} placeholder="Enter your password" />
            </View>
            <Pressable>
                <Text>Login</Text>
            </Pressable>
        </View>
    )
}