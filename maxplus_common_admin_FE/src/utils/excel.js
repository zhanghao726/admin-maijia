/**
 * json数组导出excel
 * @param json
 * @param header
 * @param filter
 * @param format_fun
 * @param filename
 */
export function excel_export_from_json(json,header,filter,format_fun,filename){
    // map reduce生成arr 参考
    function formatJson(filterVal, jsonData){
        return jsonData.map(v => filterVal.map(j => {
            return v[j];
        }))
    }

    import('../vendor/Export2Excel').then(excel => {
        const data = format_fun(filter, json);
        excel.export_json_to_excel({
            header: header,
            data:data,
            filename: filename,
            autoWidth: true
        });
    })
}
