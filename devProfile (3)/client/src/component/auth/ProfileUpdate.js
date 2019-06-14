import React from 'react'

const ProfileUpdate = () => {
    return (
        <div className="container">
                    <form className="form-group">
                       
                        <label >Date of Birth</label>
                        <input type="date" name="dob" className="form-control" />

                        <label >Contact No</label>
                        <input type="number" name="phn" className="form-control" />

                        <label>Highest Education</label>
                        <select type="dropdown" className="form-control">
                            <option value="0" hidden></option>
                            <option value="MTech" >MTech</option>
                            <option value="BE">BE</option>
                            <option value="BCA">BCA</option>
                            <option value="MCA">MCA</option>
                            <option value="PG">PG</option>
                        </select>

                        <label>Skill Set</label>
                        <input type="textbox" className="form-control"/>

                        <label>Designation</label>
                        <input type="textbox" name="desgn" className="form-control"/>

                        <label>Works At</label>
                        <input type="textbox" name="compny" className="form-control"/>

                        <label>Total Years of Experience in IT</label>
                        <input type="number" name="exp" className="form-control"/>

                        <label>Upload Image</label><br />
                        <input type="file" name="img" /><br />

                        <button type="submit" className="btn btn-primary">Submit</button><br />
            </form>
            </div>
    )
}

export default ProfileUpdate
