export default function translateDate (date: string) {
  interface IMounths {
    [index: string]: string
  }

  const mounths: IMounths = {
    January: 'Janeiro',
    February: 'Fevereiro',
    April: 'Abril',
    March: 'Março',
    May: 'Maio',
    June: 'Junho',
    July: 'Julho',
    Agust: 'Agosto',
    Septeber: 'Setembro',
    October: 'Outubro',
    November: 'Novembro',
    December: 'Dezembro'
  }

  let result

  Object.keys(mounths).forEach((mounth) => {
    if (date.includes(mounth)) {
      result = date.replace(mounth, mounths[mounth])
    }
  })

  return result
}