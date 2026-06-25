import React, { useState } from 'react'
import FileStructure from '../constants/data.json'

const List = ({ list, addFolder, removeFolder }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className='mx-5 py-1'>
      {list?.map(item => (
        <div key={item?.id} className=''>
          {item?.isFolder && <span className='cursor-pointer' onClick={() => {
            setIsExpanded(prev => ({ ...prev, [item?.name]: !prev[[item?.name]] }))
          }
          }>{!isExpanded[item?.name] ? ' + ' : ' - '}</span>}
          <span className={`${item?.isFolder && 'font-bold'}`}
          >{item?.name}
          </span>

          {item?.isFolder && <span onClick={() => addFolder(item?.id)}> <img className='w-5 inline ml-2 cursor-pointer' src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/add-folder-icon.png" alt="" />    </span>}

          {<span onClick={() => removeFolder(item?.id, item?.name)}> <img className='w-5 inline ml-2 cursor-pointer' src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/remove-folder-icon.png" alt="" />    </span>}


          {isExpanded[item?.name] && item?.isFolder && item?.children && <List list={item?.children} addFolder={addFolder} removeFolder={removeFolder} />}
        </div>
      ))}
    </div>
  )
}
const FileExplorer = () => {
  const [data, setData] = useState(FileStructure)
  const [activeId, setActiveId] = useState(null)

  // const addToNode = (parentId) => {
  //   const nameInp = prompt('Enter name of the folder')
  //   const updateTree = (list) => {
  //     return list.map(item => {
  //       if (item?.id === parentId) {
  //         return { ...item, children: [...(item?.children || []), { id: Date.now().toString(), name: nameInp, isFolder: true, children: [] }] }
  //       }
  //       else if (item?.children) {
  //         return { ...item, children: updateTree(item?.children) }
  //       }
  //       else {
  //         return item;
  //       }
  //     })
  //   }
  //   setData(prev => updateTree(prev))
  // }

  const addToNode = (pId) => {
    const nameinp = prompt('Enter Folder Name');
    const updateTree = (list) => {
      return list?.map(item=>{
        if(item?.id === pId){
          return {
            ...item, 
            children:[...(item?.children || []), {id:Date.now(), name:nameinp, isFolder:true, children:[]}], }
        }
        else if(item?.children){
          return {...item, children:updateTree(item?.children)}
        }
        else return item
      })
    }
    setData(prev => updateTree(prev))
  }

  const removeNode = (pId, node) => {
    console.log(pId,node)
    const deleteNode = confirm(`want to delete this folder:${node}`)
    if (!deleteNode) return;

    console.log(deleteNode)
    function removeTree(list) {
      return list.filter(item => item.id !== pId).map(item => {
        if (item?.children) {
          return { ...item, children: removeTree(item?.children) }
        }
        return item;
      })
    }
    setData(prev => removeTree(prev))
  }
  // function removeNode(parentId, folderName) {
  //   const deleteFolder = confirm(`Delete current folder: ${folderName}` )
  //   console.log({deleteFolder})
  //   if (!deleteFolder) return;
  //   const removeTree = (list) => {
  //     return list.filter(item=>item?.id !== parentId).map(item => {
  //       if (item?.children) {
  //         return { ...item, children: removeTree(item?.children) }
  //       }
  //       return item;
  //     })

  //   }
  //   setData(prev => removeTree(prev))
  // }

  return (
    <div>
      <h1 className='text-center my-5 font-bold text-4xl'>Nested File Explorer</h1>
      <List list={data} setActiveId={setActiveId} activeId={activeId} addFolder={addToNode} removeFolder={removeNode} />
    </div>
  )
}

export default FileExplorer
