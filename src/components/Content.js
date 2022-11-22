import React from 'react';


function Content(props) {
    const ourstyle = {
        'color' : `${props.color}`,
        'fontSize' : `${props.size}px`,
        'fontFamily' : `${props.family}` 
      }
      console.log(props.size);
    return (
        <>

            <div className="main"
                >

                <div className='para'  style={ourstyle}>
                    <p>Lorem ipsum dolor sit amet. Et dolorem recusandae ex quidem adipisci et quod ducimus et adipisci
                        dignissimos et ullam accusantium hic quidem doloremque ut nihil Quis. Et quia sint qui maiores maxime
                        qui natus nobis qui totam tenetur! Aut ipsum unde qui excepturi voluptates est laboriosam Quis.
                        Cum ratione nihil aut sint voluptatum ab natus dolor quo maxime eius.

                    </p>

                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                        alteration in some form, by injected humour, or randomised words which don't look even slightly
                        believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                        anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the
                        Internet tend to repeat predefined chunks as necessary, making this the first true generator
                        on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model
                        sentence structures, to generate Lorem Ipsum which looks reasonable.
                        The generated Lorem Ipsum is therefore always free from repetition, injected humour,
                        or non-characteristic words etc.
                    </p>

                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                        of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                        a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                        Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
                        in classical literature, discovered the undoubtable source. Lorem Ipsum
                    </p>


                    <p>
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                        Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
                        Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites   of the word
                        their exact original form, accompanied by English versions from the 1914 translation  by H. Rackham.
                    </p>


                </div>

            </div>

        </>
    )
}

export default Content


