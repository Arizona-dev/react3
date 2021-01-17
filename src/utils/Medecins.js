export default async function OpenDataApi() {
  return await fetch('https://public.opendatasoft.com/api/records/1.0/search/?dataset=medecins&q=&rows=50&facet=civilite&facet=libelle_profession&refine.column_13=Lib%C3%A9ral+int%C3%A9gral&refine.libelle_profession=M%C3%A9decin+g%C3%A9n%C3%A9raliste&refine.commune=Paris')
    .then(res => res.json())
    .then(data => data)
    .catch(e => {
      console.log(e)
    })
}