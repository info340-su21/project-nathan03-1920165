import React, { useState } from 'react';

{/* function FormSection(props) { //array of objects (input field names)
    let labelsArray = props.arrayOfObj;

    const [inputValue, setInputtedValue] = useState('');
    const handleChange = (event) => {
        let newValue = event.target.value
        setInputtedValue(newValue);
    }

    let elementsArray = labelsArray.map((SingleObj) => {
        let transformedValue = (
            <div>
                <label for={SingleObj.ID}>{SingleObj.Label}</label>
                <input type="text" onChange={handleChange} value={inputValue} id={SingleObj.ID} name={SingleObj.ID} required />
            </div>
        )
        return transformedValue;
    })

    return (
        <div>
            {elementsArray}
        </div>
    )
} */}

export default function CreateUserPage(props) {
    // let registerLabels = [
    //     {ID: 'fname', Label: 'First Name:'},
    //     {ID: 'lname', Label: 'Last Name:'},
    //     {ID: 'uname', Label: 'Username:'},
    //     {ID: 'pwd', Label: 'Password:'}
    // ]

    //stores all form values in a single object
    const [formValues, setFormValues] = useState({
        'firstname': undefined,
        'lastname': undefined,
        'username': undefined,
        'password': undefined,
        'picture': undefined,
        'pronouns': undefined,
        'city': undefined,
        'state': undefined,
        'country': undefined,
        'primary_lang': undefined,
        'second_lang': undefined,
        'phone': undefined,
        'email': undefined,
        'facebook': undefined,
        'instagram': undefined,
        'snapchat': undefined,
        'wechat': undefined,
        'discord': undefined
    })

    //update state for a specific field
    const handleChange = (event) => {
        let field = event.target.name;
        let value = event.target.value;

        let copy = {...formValues};
        copy[field] = value;
        setFormValues(copy);
    }

    //handle createAccount button
    const handleSubmit = (event) => {
        event.preventDefault();
        props.signUpCallback(
            formValues.firstname,
            formValues.lastname,
            formValues.username,
            formValues.password,
            formValues.picture,
            formValues.pronouns,
            formValues.city,
            formValues.state,
            formValues.country,
            formValues.primary_lang,
            formValues.second_lang,
            formValues.phone,
            formValues.email,
            formValues.facebook,
            formValues.instagram,
            formValues.snapchat,
            formValues.wechat,
            formValues.discord
        )
    }

    return (
        <main className="main-createUser">
            <section className="profile">
                <form className="createUser-text">
                    <h2 className="createUser-text">Create an Account</h2>

                    {/* <FormSection arrayOfObj={registerLabels} /> */}
                
                    <div>
                        <label for="fname_field">First Name:</label>
                        <input type="text" id="fname_field" name="firstname" onChange={handleChange} required />
                    </div>
                    <div>
                        <label for="lname_field">Last Name:</label>
                        <input type="text" id="lname_field" name="lastname" onChange={handleChange} required />
                    </div>
                    <div>
                        <label for="uname_field">Username:</label>
                        <input type="text" id="uname_field" name="username" pattern=".{8,}" placeholder="8 character requirement" onChange={handleChange} required />
                    </div>
                    <div>
                        <label for="pwd_field">Password:</label>
                        <input type="password" id="pwd_field" name="password" pattern=".{8,}" placeholder="8 character requirement" onChange={handleChange} required />
                    </div>
                </form>
            </section>

            <section className="aboutMe">
                <form className="createUser-text">
                    <h2 className="createUser-text">About Me</h2>
                    <em>Tell us all about you.</em>
                    <div>
                        <label for="picture_upload">Choose a profile picture:</label>
                        <input type="file" id="picture_upload" name="picture" onChange={handleChange} accept=".png, .jpg, .jpeg" />
                    </div>
                    <div>
                        <label for="pronouns_dropdown">Personal Pronoun:</label>
                        <select id="pronouns_dropdown" name="pronouns" onChange={handleChange}>
                            <option hidden="">Select one</option>
                            <option value="she">she/her/hers</option>
                            <option value="he">he/him/his</option>
                            <option value="they">they/them/their</option>
                        </select>
                    </div>
                    <div>
                        <label for="city_field">Hometown City:</label>
                        <input type="text" id="city_field" name="city" onChange={handleChange} placeholder="Seattle" required />
                    </div>
                    <div>
                        <label for="state_field">Hometown State:</label>
                        <input type="text" id="state_field" name="state" onChange={handleChange} placeholder="WA" required />
                    </div>
                    <div>
                        <label for="country_field">Hometown Country:</label>
                        <input type="text" id="country_field" name="country" onChange={handleChange} placeholder="USA" required />
                    </div>
                    <div>
                        <label for="primary_lang_field">Primary Language:</label>
                        <input type="text" id="primary_lang_field" name="primary_lang" onChange={handleChange} placeholder="English" required />
                    </div>
                    <div>
                        <label for="second_lang_field">Secondary Language:</label>
                        <input type="text" id="second_lang_field" name="second_lang" onChange={handleChange} placeholder="Chinese" required />
                    </div>
                </form>
            </section>

            <section className="contacts">
                <form className="createUser-text">
                    <h2 className="createUser-text">Contact Information</h2>
                    <em>Provide your contact information to be reached by other students.</em>
                    <div>
                        <label for="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" onChange={handleChange} placeholder="206-543-2100" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                    </div>
                    <div>
                        <label for="email">Email Address:</label>
                        <input type="email" id="email" name="email" onChange={handleChange} placeholder="example@domain.com" required />
                    </div>
                    <div>
                        <label for="facebook"><i className="fab fa-facebook" aria-label="Facebook"></i> Facebook: </label>
                        <input type="text" id="facebook" name="facebook" onChange={handleChange} />
                    </div>
                    <div>
                        <label for="instagram"><i className="fab fa-instagram" aria-label="Instagram"></i> Instagram: </label>
                        <input type="text" id="instagram" name="instagram" onChange={handleChange} placeholder="@handle" />
                    </div>
                    <div>
                        <label for="snapchat"><i className="fab fa-snapchat" aria-label="Snapchat"></i> Snapchat: </label>
                        <input type="text" id="snapchat" name="snapchat" onChange={handleChange} placeholder="@handle" />
                    </div>
                    <div>
                        <label for="wechat"><i className="fab fa-weixin" aria-label="WeChat"></i> WeChat: </label>
                        <input type="text" id="wechat" onChange={handleChange} name="wechat" />
                    </div>
                    <div>
                        <label for="discord"><i className="fab fa-discord" aria-label="Discord"></i> Discord: </label>
                        <input type="text" id="discord" name="discord" onChange={handleChange} placeholder="@discord#0000" />
                    </div>
                </form>
            </section>

            <div>
                <button type="submit">Create an Account</button>
            </div>

            <div className="createUser-text">
                <p><em>Already have an account?</em></p>
                <button>Log In</button>
            </div>
        </main>
    )
}