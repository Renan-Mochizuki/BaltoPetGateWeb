
const Ficha = () => {
  return (
    <ScrollView>
    <View style={styles.Container}>
        <Image style={styles.Imagem} resizeMode='cover' source={require('../../assets/img/dog.png')} />
        <View style={styles.Conjunto1}>
            <TextoComum textoTitulo='Nome:' textoDescricao='Nilsinho' />
            <TextoComum textoTitulo='Porte:' textoDescricao='Médio' />
        </View>
        <View style={styles.Conjunto2}>
            <TextoComum textoTitulo='12' textoDescricao='Kg' />
            <View style={styles.Barras}>
                <TextoComum textoDescricao='Macho' />
            </View>
            <TextoComum textoTitulo='2' textoDescricao='Ano(s)' />
        </View>
        <View style={styles.Conjunto3}>
            <TextoComum textoTitulo='Temperamento:' />
            <TextoMultiplo textoMultiplo='Aaaaaa' />
        </View>
        <View style={styles.Conjunto3}>
            <TextoComum textoTitulo='Situação:' />
            <TextoMultiplo textoMultiplo='Aaaaaa' />
        </View>
        <View style={styles.Conjunto3}>
            <TextoComum textoTitulo='Trauma:' />
            <TextoMultiplo textoMultiplo='Aaaaaa' />
        </View>
        <View style={styles.Conjunto3}>
            <TextoComum textoTitulo='Cuidado:' />
            <TextoMultiplo textoMultiplo='Aaaaaa' />
        </View>
        <View style={styles.Conjunto4}>
            <TextosOpcionais textosOpcionais='Castrado(a)' />
            <TextosOpcionais textosOpcionais='Vermifugado(a)' />
            <TextosOpcionais textosOpcionais='Microchipado(a)' />
        </View>
        <View style={styles.GroupBox}>
            <Text style={styles.Titulo}>Descrição</Text>
            <TextoMenor textoDescricao='Duis sed lacinia nisi, nec condimentum tellus. Mauris bibendum orci at malesuada tincidunt. Vivamus id finibus augue, non hendrerit risus. Etiam in nunc egestas, sagittis ex ac, dictum ex. Curabitur et pulvinar augue. Mauris nec porttitor felis. Aliquam in eros sed nunc pellentesque posuere...' />
            <TextoMenor textoTitulo='Cor(es):' textoDescricao='dhgfdyfgdfgdifgdfgdfgdufgd' />
            <TextoMenor textoTitulo='Local do resgate:' textoDescricao='Médio' />
        </View>
        <View style={styles.GroupBox}>
            <Text style={styles.Titulo}>Localização</Text>
            <View style={styles.GroupBox2}>
                <Text style={styles.TextoClaro}>São Miguel do Gostoso</Text>
                <Text style={styles.TextoEscuro}>SP</Text>
            </View>
            <View style={styles.GroupBox2}>
                <Text style={styles.TextoClaro}>São Miguel do Gostoso</Text>
                <Text style={styles.TextoEscuro}>,</Text>
                <Text style={styles.TextoClaro}>São Miguel do Gostosok,k,k,j</Text>
            </View>
        </View>
        <View style={styles.ConjuntoBotao}>
            <BotaoCadastrar />
        </View>
    </View>
</ScrollView>
  )
}

export default Ficha