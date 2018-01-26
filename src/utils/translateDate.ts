export default function translateDate (date: string) {
  interface IMounths {
    [index: string]: string
  }

  const mounths: IMounths = {
    Jan: 'Janeiro',
    Feb: 'Fevereiro',
    Mar: 'Março',
    Apr: 'Abril',
    May: 'Maio',
    Jun: 'Junho',
    Jul: 'Julho',
    Aug: 'Agosto',
    Sep: 'Setembro',
    Oct: 'Outubro',
    Nov: 'Novembro',
    Dec: 'Dezembro'
  }

  let result

  Object.keys(mounths).forEach((mounth) => {
    if (date.includes(mounth)) {
      result = date.replace(mounth, mounths[mounth])
    }
  })

  return result
}