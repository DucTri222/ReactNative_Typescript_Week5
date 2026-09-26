import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { CartItem } from "../data";

export function CartLineItem({ item }: { item: CartItem }) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: item.book.cover }} style={styles.thumb} />
      <Text style={styles.title} numberOfLines={1}>
        {item.book.title}
      </Text>
      <View style={styles.meta}>
        <Text style={styles.qty}>x{item.quantity}</Text>
        <Text style={styles.price}>{(item.book.price * item.quantity).toLocaleString()} đ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  thumb: { width: 44, height: 60, borderRadius: 6, backgroundColor: "#EEF2F7" },
  title: { flex: 1, fontSize: 13, fontWeight: "600", color: "#111827" },
  meta: { width: 90, alignItems: "flex-end" },
  qty: { fontSize: 11, color: "#5B6B7F" },
  price: { fontSize: 13, fontWeight: "700", color: "#1E1B4B" },
});