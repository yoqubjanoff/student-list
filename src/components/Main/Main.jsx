import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Main = ({students, setStudents, select, setSelect}) => {

  const delet = (id) =>{
    students.splice(id,1)
    setStudents([...students])
  }

  const edit = (id) => {
    setSelect(id)

  }
  
  return (
    <>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <form>
                <label className='d-flex flex-column mb-4'>Search
                  <input className='form-control mt-1' type="text" name='firstName' placeholder='Name' />
                </label>
                <label className='d-flex flex-column mb-4'>From
                  <input className='form-control mt-1' type="text" name='firstName' placeholder='e.g 0' />
                </label>
                <label className='d-flex flex-column mb-4'>To
                  <input className='form-control mt-1' type="text" name='firstName' placeholder='e.g 100' />
                </label>
                <label className='d-flex flex-column mb-4'>Sort by
                  <select className='form-select'>
                    <option value="names">Name</option>
                    <option value="lastnames">Last name</option>
                    <option value="mark">Mark</option>
                  </select>
                </label>
                <div className="d-grid">

                </div>
              </form>
            </div>
            <div className="col-9">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name & Lastname</th>
                    <th scope="col">Marked date</th>
                    <th scope="col">Mark</th>
                    <th scope="col">Status</th>
                    <th scope="col">Delet</th>
                    <th scope="col">Edit</th>
                  </tr>
                </thead>
                {students.length > 0 && students.map((student,index)=>(
                    <tbody>
                    <tr>
                      <th scope="row">{student.id}</th>
                      <td>{student.name} {student.lastname}</td>
                      <td>{student.date}</td>
                      <td>{student.mark}</td>
                      {student.status === false ? (<td><span className='bg-danger text-white rounded py-1 px-2'>Fail</span></td>) : 
                      <td><span className='bg-success text-white rounded py-1 px-2'>Pass</span></td>}
                      <td><button className='btn btn-danger py-2 px-4' onClick={()=> delet(index)}></button></td>
                      <td><button className='btn btn-success py-2 px-4' onClick={()=> edit(index)} data-bs-toggle="modal" data-bs-target="#exampleModal"></button></td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main