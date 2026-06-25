// import React, { useState } from 'react'
// import data from '../constants/nestedCheckboxData.json'

// const Checkboxes = ({ items, onSelect, selIds, setSelIds }) => {

//   // const handleChange = (checked, item) => {

//   //   setSelIds(prev => {

//   //     const newSelIds = { ...prev };

//   //     // 1. update clicked item
//   //     newSelIds[item.id] = checked;

//   //     // 2. update all children
//   //     const updateChildren = (children) => {

//   //       children?.forEach(child => {

//   //         newSelIds[child.id] = checked;

//   //         if (child.children) {
//   //           updateChildren(child.children);
//   //         }
//   //       });
//   //     };

//   //     updateChildren(item.children);

//   //     // 3. recalculate parents
//   //     const updateParents = (node) => {

//   //       if (!node.children?.length) {
//   //         return !!newSelIds[node.id];
//   //       }

//   //       // recurse into children first
//   //       const allChildrenChecked = node.children.map(child =>
//   //         updateParents(child)
//   //       ).every(Boolean);

//   //       newSelIds[node.id] = allChildrenChecked;
//   //       return allChildrenChecked;
//   //     };

//   //     data.forEach(updateParents);

//   //     return newSelIds;
//   //   });
//   // };

//   // const handleChange = (checked, item) => {

//   //   setSelIds(prev => {

//   //     const newSelIds = { ...prev }
//   //     // 1. update clicked item
//   //     newSelIds[item?.id] = checked;

//   //     // update children

//   //     const updateChildren = (children) => {
//   //       children?.forEach(child => {
//   //         newSelIds[child.id] = checked;
//   //         if (child?.children) {
//   //           updateChildren(child.children);
//   //         }
//   //       })
//   //     }
//   //     updateChildren(item?.children)

//   //     // update parent if all children selected

//   //     const updateParent = (node) => {
//   //       if (!node?.children || node?.children?.length === 0) {
//   //         return !! newSelIds[node?.id];
//   //       }
//   //       const allChildrenChecked = node?.children?.map(child => updateParent(child)).every(Boolean);

//   //       newSelIds[node?.id] = allChildrenChecked;
//   //       return allChildrenChecked;
//   //     }

//   //     data?.forEach(updateParent)

//   //     return newSelIds;
//   //   })
//   // }

//   const handleChange=(checked, item)=>{
//     setSelIds(prev=>{
//       const newSelIds = {...prev};
//       newSelIds[item?.id] = checked;

//       const updateChildren = (children)=>{
//         children?.forEach(child=>{
//             newSelIds[child.id] = checked;
//             if(child?.children){
//               updateChildren(child.children);
//             }
//         })
//       }
//       updateChildren(item?.children)

//       const updateParent = (node)=> {
//         if(!node?.children || node?.children?.length===0){
//           return !! newSelIds[node?.id]
//         }
//         const allChildrenChecked = node?.children?.map(item=>updateParent(item)).every(Boolean);

//         newSelIds[node.id] = allChildrenChecked;
//         return allChildrenChecked;
//       }
//       data?.forEach(updateParent)
//       return newSelIds;
//     })
//   }
//   return (
//     <div className='ml-4'>
//       {items.map((item) => (
//         <div key={item.id}>
//           <input type="checkbox" className='mx-2' onChange={(e) => handleChange(e.target.checked, item)} checked={!!selIds[item?.id]} />
//           <span>{item.name}</span>
//           {item?.children && item.children.length > 0 && (
//             <Checkboxes setSelIds={setSelIds} items={item.children} onSelect={onSelect} selIds={selIds} />
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

// const NestedCheckBoxes = () => {
//   const [cdata] = useState(data);
//   const [selectedIds, setSelectedIds] = useState({});
//   console.log(selectedIds, 'selectedIds')

//   return (
//     <div>
//       <Checkboxes items={cdata} setSelIds={setSelectedIds} selIds={selectedIds}
//       // onSelect={handleCheckboxChange}
//       />
//     </div>
//   )
// }

// export default NestedCheckBoxes

import React from 'react'
import data from '../constants/nestedCheckboxData.json'
import { useState } from 'react'

const Checkboxes = ({ items, selIds, setSeldIds }) => {

  const handleChange = (checked, item)=>{
    // setSeldIds(prev=>{
    //   const newSelIds = {...prev}
    //   // set nodes value
    //   newSelIds[item?.id] = checked;

    //   // update children
    //   const updateChildren =(children) =>{
    //     children?.forEach(child => {
    //       newSelIds[child?.id] = checked;
    //       if(child?.children?.length > 0){
    //         updateChildren(child?.children)
    //       }
    //     });
    //   }
    //   updateChildren(item?.children)

    //   // update parent
    //   const updateParent = (node)=>{
    //     if(!node?.children || node?.children.length ===0){
    //       return !!newSelIds[node.id]
    //     }
    //     const allChecked = node?.children?.map(item=>updateParent(item)).every(Boolean)
    //     newSelIds[node.id] = allChecked;
    //     return allChecked;
    //   }
    //   data?.forEach(updateParent)

    //   return newSelIds;
    // })
    setSeldIds(prev=>{
      const newSelIds = {...prev}
      newSelIds[item?.id] = checked;

      const updateChildren =(children)=>{
        children?.forEach(child=> {
          newSelIds[child?.id] = checked;
          if(child?.children?.length){
            updateChildren(child?.children)
          }
        })
      }
      updateChildren(item?.children)

      const updateParent =(node)=>{
        if(!node?.children || node?.children?.length ===0){
          return !!newSelIds[node?.id] 
        }  
        const allChecked = node?.children?.map(item=>updateParent(item)).every(Boolean)

        newSelIds[node?.id] = allChecked;
        return allChecked;
      }
      data?.forEach(updateParent)

      return newSelIds

    })
  } 

return (
  <div>
    {items?.map(item => (
      <div key={item?.id} className='pl-3 py-0.5'>
        <input type='checkbox' onChange={(e)=>handleChange(e.target.checked, item)} checked={!!selIds[item.id]}/>
        <span> {item?.name}</span>
        {item?.children && <Checkboxes items={item?.children} selIds={selIds} setSeldIds={setSeldIds}/>}
      </div>
    ))}
  </div>
  )
}
const NestedCheckBoxes = () => {

  const [chItems] = useState(data)
  const [selectedIds, setSelectedIds] = useState({})

  return (
    <div>
      <h1 className='text-3xl font-bold'>Nested Checkboxes</h1>
      <Checkboxes items={chItems} selIds={selectedIds} setSeldIds={setSelectedIds} />
    </div>
  )
}

export default NestedCheckBoxes