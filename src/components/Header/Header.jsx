import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "./Header.scss"


const Header = ({ students, setStudents, select, setSelect}) => {
        console.log(select);

    const handleSubmit = (evt) => {
        evt.preventDefault()

        //! bu yerda kunlarni oylarni olmoqdamiz
        const date = new Date();
        const kun = date.getDate();
        const oy = date.getMonth();
        const yil = date.getFullYear();
        const [name, lastname, mark] = evt.target.elements;


        //! bu yerda studentni olgan balini foizini tekshirmoqdamiz
        const status = 100 / 150 * mark.value;
        console.log(status + "foiz");

        const tempBase = {
            id: students.length + 1,
            name: name.value,
            lastname: lastname.value,
            mark: mark.value,
            date: `${kun}.${oy}.${yil}`,
            status: status >= 60 ? true : false
        }

        if (select >= 0) {
           tempBase.id = students[select].id;

            students[select] = tempBase;
            setStudents([...students])

            setSelect(-1);
            return;
        }
        setStudents([...students, tempBase])
    }
    return (
        <>
            <header className='site-header py-5'>
                <div className="container">
                    <div className="wrapper d-flex align-items-center justify-content-between">
                        <h1>Exam result</h1>
                        <span className='count'>0</span>
                        <a href="/">About</a>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <h2>Add new student</h2>
                        </button>
                    </div>
                </div>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form onSubmit={(evt) => handleSubmit(evt)}>
                                    <input className='form-control my-3' defaultValue={select?.name} name='name' type="text" placeholder='Enter student name' />
                                    <input className='form-control my-3' defaultValue={select?.lastname} name='lastname' type="text" placeholder='Enter student lastname' />
                                    <input className='form-control my-3' defaultValue={select?.mark} name='mark' type="number" placeholder='Enter student mark' />
                                    <div className="d-grid">
                                        <button className="btn btn-primary" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header