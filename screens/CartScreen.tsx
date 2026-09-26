import React from "react";
import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";
import { CartLineItem } from "../components/CartLineItem";
import { CartItem } from "../data";

export function CartScreen({ items }: { items: CartItem[] }) {
  const total = items.reduce((sum, item) => sum + item.book.price * item.quantity, 0);

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Giỏ hàng</Text>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        {items.map((item) => (
          <CartLineItem key={item.book.id} item={item} />
        ))}
      </ScrollView>

      <View style={styles.totalBar}>
        <View>
          <Text style={styles.totalLabel}>Tổng cộng</Text>
          <Text style={styles.totalValue}>{total.toLocaleString()} đ</Text>
        </View>
        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FFFFFF" },
  header: { fontSize: 18, fontWeight: "800", paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8 },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 16, paddingBottom: 16 },
  totalBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    // = chiều cao TabBar (64) -> thanh này không bị TabBar (absolute) đè lên
    marginBottom: 64,
  },
  totalLabel: { fontSize: 12, color: "#5B6B7F" },
  totalValue: { fontSize: 18, fontWeight: "800", color: "#1E1B4B" },
  checkoutButton: { backgroundColor: "#4338CA", paddingHorizontal: 24, paddingVertical: 12, borderRadius: 10 },
  checkoutText: { color: "#FFFFFF", fontWeight: "700" },
});