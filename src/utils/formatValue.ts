export const formatValue = (value: number) => (
    new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(value) // 2 = R$ 2,00
);