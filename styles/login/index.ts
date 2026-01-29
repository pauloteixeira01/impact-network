import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    paddingTop: 26,
    backgroundColor: "#0b1220", // fundo escuro elegante
  },

  header: {
    paddingTop: 12,
    paddingBottom: 18,
    gap: 8,
  },

  logo: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "rgba(59,130,246,0.18)",
    borderWidth: 1,
    borderColor: "rgba(59,130,246,0.35)",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#93c5fd",
    fontWeight: "900",
    letterSpacing: 0.5,
  },

  title: {
    marginTop: 6,
    fontSize: 28,
    fontWeight: "900",
    color: "#e5e7eb",
  },
  subtitle: {
    fontSize: 14,
    color: "#9ca3af",
    lineHeight: 20,
    maxWidth: 320,
  },

  form: {
    marginTop: 10,
    padding: 16,
    borderRadius: 18,
    backgroundColor: "rgba(255,255,255,0.04)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.08)",
  },

  field: {
    marginBottom: 12,
    gap: 6,
  },

  label: {
    color: "#cbd5e1",
    fontSize: 13,
    fontWeight: "700",
  },

  input: {
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.10)",
    backgroundColor: "rgba(2,6,23,0.55)",
    color: "#e5e7eb",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 14,
  },

  button: {
    marginTop: 6,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    backgroundColor: "#3b82f6",
  },
  buttonPressed: {
    transform: [{ scale: 0.99 }],
    opacity: 0.95,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: "#0b1220",
    fontWeight: "900",
    letterSpacing: 0.3,
  },

  footerRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginTop: 14,
  },
  footerText: {
    color: "#9ca3af",
  },
  footerLink: {
    color: "#93c5fd",
    fontWeight: "800",
  },

  disclaimer: {
    marginTop: 14,
    textAlign: "center",
    fontSize: 12,
    color: "#6b7280",
    lineHeight: 18,
  },
});
