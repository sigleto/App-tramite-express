import React from "react";
import { View, Text, Linking, StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const centerStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export const AvisoAEAT1 = () => {
  return (
    <View style={[styles.container, centerStyle]}>
      <View style={styles.aviso}>
        <Text style={styles.texto}>
        ¡ATENCIÓN!: Para realizar este trámite deberás autenticarte con C@ave,Certificado Digital o DNIe
        </Text>
        <Text
          style={styles.avisoLink}
          onPress={() =>
            Linking.openURL(
              "https://www2.agenciatributaria.gob.es/wlpl/BUCV-JDIT/AutenticaDniNieContrasteh?ref=%2Fwlpl%2FOVCT-CXEW%2FSelectorAcceso%3Fref%3D%252Fwlpl%252FREGD-JDIT%252FFG%253FfTramite%253DGZ785%26aut%3DCP"
            )
          }
        >
          Ir a trámite
        </Text>
      </View>
    </View>
  );
};

export const AvisoAEAT2 = () => {
  return (
    <View style={[styles.container, centerStyle]}>
      <View style={styles.aviso}>
        <Text style={styles.texto}>
        ¡ATENCIÓN!: Para realizar este trámite deberás autenticarte con C@ave,Certificado Digital o DNIe
        </Text>
        <Text
          style={styles.avisoLink}
          onPress={() =>
            Linking.openURL(
              "https://www6.agenciatributaria.gob.es/wlpl/SRVO-JDIT/ConsultaDdas?faccion=CONS_DDAS"
            )
          }
        >
          Ir a trámite
        </Text>
      </View>
    </View>
  );
};

export const AvisoAEAT3 = () => {
  return (
    <View style={[styles.container, centerStyle]}>
      <View style={styles.aviso}>
        <Text style={styles.texto}>
        ¡ATENCIÓN!: Para realizar este trámite deberás autenticarte con C@ave,Certificado Digital o DNIe
        </Text>
        <Text
          style={styles.avisoLink}
          onPress={() =>
            Linking.openURL(
              "https://www2.agenciatributaria.gob.es/wlpl/BUCV-JDIT/AutenticaDniNieContrasteh?ref=%2Fwlpl%2FOVCT-CXEW%2FSelectorAcceso%3Fref%3D%252Fwlpl%252FSCEJ-MANT%252FSvqueryEDOV%253FMODELO%253D100%2526EJERCICIO%253D-1%26aut%3DCPR"
            )
          }
        >
          Ir a trámite
        </Text>
      </View>
    </View>
  );
};

export const AvisoAEAT4 = () => {
  return (
    <View style={[styles.container, centerStyle]}>
      <View style={styles.aviso}>
        <Text style={styles.texto}>
          ¡ATENCIÓN!: Para este trámite deberás de facilitar el código CSV que
          figura en el documento que te ha enviado la AEAT. Lo podrás encontrar en
          la parte inferior del mismo (abajo del todo)
        </Text>
        <Text
          style={styles.avisoLink}
          onPress={() =>
            Linking.openURL(
              "https://www2.agenciatributaria.gob.es/wlpl/REGD-JDIT/FGCSV"
            )
          }
        >
          Ir a trámite
        </Text>
      </View>
    </View>
  );
};

export const AvisoAEAT5 = () => {
  return (
    <View style={[styles.container, centerStyle]}>
      <View style={styles.aviso}>
        <Text style={styles.texto}>
        ¡ATENCIÓN!: Para realizar este trámite deberás autenticarte con C@ave,Certificado Digital o DNIe
        </Text>
        <Text
          style={styles.avisoLink}
          onPress={() =>
            Linking.openURL(
              "https://sede.agenciatributaria.gob.es/Sede/procedimientoini/GZ25.shtml"
            )
          }
        >
          Ir a trámite
        </Text>
      </View>
    </View>
  );
};

export const AvisoAEAT6 = () => {
  return (
    <View style={[styles.container, centerStyle]}>
      <View style={styles.aviso}>
        <Text style={styles.texto}>
        ¡ATENCIÓN!: Para realizar este trámite deberás autenticarte con C@ave,Certificado Digital o DNIe
        </Text>
        <Text
          style={styles.avisoLink}
          onPress={() =>
            Linking.openURL(
              "https://sede.agenciatributaria.gob.es/Sede/procedimientoini/G613.shtml"
            )
          }
        >
          Ir a trámite
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
  aviso: {
    backgroundColor: "#eff4bd",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  texto: {
    fontSize: 24,
    marginBottom: 8,
    textAlign: 'justify',
  },
  avisoLink: {
    color: "#007BFF",
    fontSize: 22,
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: 'center',
  },
});
