// utils/googleAuth.js
import { useEffect } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/firebase"; // ✅ import shared auth

WebBrowser.maybeCompleteAuthSession();

export const useGoogleSignIn = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "5560d987-00b4-4395-80ca-f7d86b78ca91.apps.googleusercontent.com",
    androidClientId: "114544614914-896e68ff4iqbkdvpimko0pcdnom6dfar.apps.googleusercontent.com",
    iosClientId: "114544614914-t4n6csbgrquevp08qr2uu7vsa32v67s2.apps.googleusercontent.com",
    webClientId: "114544614914-7grqlil1mtiekq1qjeb955au3k3a6uq9.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.authentication;
      const credential = GoogleAuthProvider.credential(id_token);

      signInWithCredential(auth, credential)
        .then((userCred) => {
          console.log("✅ Signed in as:", userCred.user.email);
        })
        .catch((err) => {
          console.error("❌ Firebase sign-in failed:", err);
        });
    }
  }, [response]);

  const signInWithGoogle = async () => {
    await promptAsync();
  };

  return { signInWithGoogle, request };
};
