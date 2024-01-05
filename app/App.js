import { StatusBar } from "expo-status-bar";

import { Text, View, Image, ScrollView } from "react-native";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function EntryPoint() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["productos"],
    queryFn: () =>
      fetch("https://nomade-final.vercel.app/api/productos").then((res) =>
        res.json()
      ),
  });
  return (
    <ScrollView style={{ padding: 20 }}>
      {isLoading ? <Text>Cargando...</Text> : <Text>Nomade Productos</Text>}

      <StatusBar style="auto" />
      {data?.map((producto) => (
        <View
          style={{
            borderColor: "gray",
            borderWidth: 1,
          }}
        >
          <Text>{producto.name}</Text>
          <Image
            source={{
              uri: producto.image,
            }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}
