import React from 'react'
import Dropzone from 'react-dropzone'
import { Box, Center } from '@northlight/ui'
import { utils, read } from 'xlsx'
import { palette } from '@northlight/tokens'

export type ExcelRowType = {
  name: string
  score: number
}

export type ExcelDropzoneProps = {
  onSheetDrop: (rows: ExcelRowType[]) => void
  label: string
}

const ExcelDropzone = (props: ExcelDropzoneProps) => {
  const { label, onSheetDrop } = props
  
  const handleDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    const reader = new window.FileReader()
    reader.onload = function (e) {
      const data = e.target?.result
      const workbook = read(data, { type: 'binary' })
      const sheetName = workbook.SheetNames[0]
      onSheetDrop(utils.sheet_to_json(workbook.Sheets[sheetName]))
    }
    reader.readAsBinaryString(file)
  }
  
  const handleError = (error: Error): void => {
    alert("Something went wrong! Open console to see details");
    console.error(error);
  }
  
  return (
    <Dropzone
      multiple={false}
      onDrop={handleDrop}
      onError={handleError}
    >
      {({getRootProps}) => (
        <Box
          { ...getRootProps() }
          border="2px dashed"
          borderColor={ palette.gray['200']}
          minW="20%"
        >
          <Center height="200">{ label }</Center>
        </Box>
      )}
    </Dropzone>
  )
}

export default ExcelDropzone;
