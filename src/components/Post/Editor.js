import React, { useState }  from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from "@ckeditor/ckeditor5-react";


function Editor() {
    const [addData, setVal] = useState("");
    const [addedData, showData] = useState(0)
    const handleChange = (e, editor) => {
        const data = editor.getData();
        setVal(data);
    }
  return (
      <div style={{ textAlign: 'center' }}>
          <div style={{ width: '900px', display: 'inline-block', textAlign: 'left' }}>
              <div style={{ width: '700px', display: 'inline-block', textAlign: 'right', marginBottom: '5px' }}>
                  <button style={{ backgroundColour: 'black', color: 'white' }} onClick={() => showData(!addedData)}>
                      {addedData ? 'Hide Data': "showData"}
                  </button>
          </div>
                <CKEditor editor={ClassicEditor} data={addData} onChange={handleChange} />
            <div>
            {addedData? addData : ''}
        </div>   
        </div>
    </div>
  )
}

export default Editor;
