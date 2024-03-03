/* eslint-disable @next/next/no-img-element */
import { Section } from "@react-email/section";
import { Button } from "@react-email/button";
import { Text } from "@react-email/text";
import Layout from "./Layout";

type EmailProps = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  haircut: string;
};

export default function ReceveidTemplate({
  name,
  email,
  phone,
  date,
  time,
  service,
  haircut,
}: EmailProps) {
  return (
    <Layout username={name}>
      <Text style={h3}>Cher(e) {name},</Text>
      <Section style={{ textAlign: "center", paddingBlock: "22px" }}>
        <Text style={largeText}>
          Merci d&apos;avoir pris rendez-vous avec Dydy&apos; Hair. Voici un
          récapitulatif de votre rendez-vous :
        </Text>

        <Text style={normalText}>Email: {email}</Text>
        <Text style={normalText}>Téléphone: {phone}</Text>
        <Text style={normalText}>Date: {date}</Text>
        <Text style={normalText}>Heure: {time}</Text>
        <Text style={normalText}>Service: {service}</Text>
        <Text style={normalText}>Type de coupe: {haircut}</Text>

      </Section>
    </Layout>
  );
}

const h3 = {
  color: "#878686",
  fontFamily: "kally-dreams",
  fontStyle: "italic",
  fontSize: "18px",
  fontWeight: "bold",
  textAlign: "left" as const,
  padding: "0",
  margin: "10px 0",
};

const largeText = {
  color: "#000",
  fontFamily: "kally-dreams",
  fontStyle: "italic",
  fontSize: "16px",
  fontWeight: "normal",
  textAlign: "left" as const,
  padding: "0",
  margin: "10px 0",
};

const normalText = {
  color: "#000",
  fontFamily: "kally-dreams",
  fontStyle: "italic",
  fontSize: "14px",
  fontWeight: "normal",
  textAlign: "left" as const,
  padding: "0",
  margin: "10px 0",
};

const btn = {
  fontFamily: "kally-dreams",
  fontStyle: "italic",
  fontSize: "16px",
  fontWeight: "bold",
  borderRadius: "4px",
  color: "#fff",
  backgroundColor: "#CE9D06",
  padding: "10px 20px",
  margin: "20px 0",
  border: "none",
  cursor: "pointer",
};
