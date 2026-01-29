import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

import { auth } from "@/lib/firebase";

import { styles } from "@/styles/login";

export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return email.trim().length > 0 && password.length >= 6 && !isSubmitting;
  }, [email, password, isSubmitting]);

  async function handleLogin() {
    const e = email.trim();

    if (!e) return Alert.alert("Missing email", "Please enter your email.");
    if (!password)
      return Alert.alert("Missing password", "Please enter your password.");

    setIsSubmitting(true);
    try {
      await signInWithEmailAndPassword(auth, e, password);
      router.replace("/(tabs)");
    } catch (err: any) {
      const code: string | undefined = err?.code;
      if (
        code === "auth/invalid-credential" ||
        code === "auth/wrong-password"
      ) {
        Alert.alert("Login failed", "Invalid email or password.");
      } else if (code === "auth/user-not-found") {
        Alert.alert("Login failed", "No user found with this email.");
      } else if (code === "auth/invalid-email") {
        Alert.alert("Login failed", "Invalid email format.");
      } else {
        Alert.alert("Login failed", err?.message ?? "Unexpected error.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  function goToRegister() {
    router.push("/(auth)/register");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>IN</Text>
        </View>

        <Text style={styles.title}>Impact Network</Text>
        <Text style={styles.subtitle}>
          Connect with local causes and make a difference.
        </Text>
      </View>

      {/* Form */}
      <View style={styles.form}>
        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder='you@example.com'
            placeholderTextColor='#94a3b8'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
            editable={!isSubmitting}
            returnKeyType='next'
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder='••••••••'
            placeholderTextColor='#94a3b8'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            editable={!isSubmitting}
            returnKeyType='done'
            onSubmitEditing={handleLogin}
          />
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            !canSubmit && styles.buttonDisabled,
            pressed && canSubmit && styles.buttonPressed,
          ]}
          onPress={handleLogin}
          disabled={!canSubmit}
        >
          {isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <Text style={styles.buttonText}>Sign In</Text>
          )}
        </Pressable>

        <View style={styles.footerRow}>
          <Text style={styles.footerText}>Don’t have an account?</Text>
          <Pressable onPress={goToRegister}>
            <Text style={styles.footerLink}>Create one</Text>
          </Pressable>
        </View>

        {/* Pequeno texto legal / confiança */}
        <Text style={styles.disclaimer}>
          By continuing, you agree to use Impact Network responsibly.
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}
