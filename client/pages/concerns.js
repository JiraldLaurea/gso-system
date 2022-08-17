import Axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import useSWR, { mutate } from "swr";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { async } from "@firebase/util";
import { Icon } from "@iconify/react";

function concerns() {
    const [text, setText] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const router = useRouter();
    const [imageUpload, setImageUpload] = useState(null);
    const [imageThumbnail, setImageThumbnail] = useState(null);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const inputFileRef = useRef(null);
    const [value, setValue] = useState("");

    const {
        data: concerns,
        error: errorConcerns,
        isValidating: isValidatingConcerns,
    } = useSWR("http://localhost:3001/concern");

    const imagesRef = ref(storage, "img/concern/");

    // const uploadImage = () => {
    //     if (imageUpload == null) {
    //         alert("No image selected");
    //     } else {
    //         const imageRef = ref(
    //             storage,
    //             `img/announcement/${imageUpload.name + v4()}`
    //         );

    //         // console.log("TEST", imageRef);

    //         uploadBytes(imageRef, imageUpload).then((res) => {
    //             alert("Image Uploaded");
    //             getDownloadURL(imageRef).then((url) => {
    //                 console.log(url);
    //             });
    //         });
    //     }
    // };

    // useEffect(() => {
    //     listAll(imagesRef).then((res) => {
    //         res.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 console.log(url);
    //             });
    //         });
    //     });
    // }, []);

    const handleChange = (e) => {
        setValue(e.target.value);
        localStorage.setItem("inputValue", e.target.value);
    };

    useEffect(() => {
        setValue(localStorage.getItem("inputValue"));
    }, []);

    const createConcern = async (e) => {
        e.preventDefault();

        if (text != "") {
            setIsLoading(true);
            if (imageUpload != null) {
                const imageRef = ref(
                    storage,
                    `img/concern/${imageUpload.name + v4()}`
                );

                // console.log("TEST", imageRef);

                await uploadBytes(imageRef, imageUpload).then(() => {
                    getDownloadURL(imageRef).then(async (url) => {
                        // setImageUrl(url);
                        // console.log(url);
                        const data = {
                            text: text,
                            imageUrl: url,
                        };
                        await Axios.post(
                            "http://localhost:3001/concern/create",
                            data
                        ).then((res) => {
                            alert("Successfully posted concern");
                            setText("");
                            inputFileRef.current?.form.reset();
                            setImageUpload(null);
                            setImageThumbnail(null);
                            setImageUpload("");
                            setIsLoading(false);
                            mutate("http://localhost:3001/concern");
                        });
                    });
                });
            } else {
                const data = {
                    text: text,
                    imageUrl: null,
                };
                await Axios.post(
                    "http://localhost:3001/concern/create",
                    data
                ).then((res) => {
                    alert("Successfully posted concern");
                    setText("");
                    setIsLoading(false);
                    mutate("http://localhost:3001/concern");
                });
            }
        } else {
            alert("Please fill in the text form");
        }
    };

    return (
        <div className="flex flex-col w-full">
            {/* <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSfkGnUZncasc3Pmz4m71AR9vmJjZyRR2yBFoifaZZ8i5InsEA/viewform?embedded=true"
                width="640"
                height="549"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
            >
                Loading…
            </iframe> */}

            {isMenuOpen && (
                <>
                    <div
                        onClick={() => setIsMenuOpen(false)}
                        className="fixed top-0 left-0 z-20 w-screen h-screen bg-gray-700/30"
                    />
                    <form
                        onSubmit={createConcern}
                        className="fixed inset-x-0 z-30 w-full max-w-xl p-6 mx-auto bg-white top-32"
                    >
                        <div className="flex items-start justify-between">
                            <p className="text-xl font-medium">
                                Post concern
                            </p>
                            <Icon
                                onClick={() => setIsMenuOpen(false)}
                                className="p-1 text-gray-600 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 w-9 h-9"
                                icon="clarity:close-line"
                            />
                        </div>
                        <div className="my-4">
                            <p className="mb-1 text-sm text-gray-600">Text</p>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="w-full px-3 py-2 border min-h-[140px] max-h-[200px]"
                                type="text"
                                placeholder="Text"
                            />
                        </div>
                        <div className="mb-6">
                            <p className="mb-1 text-sm text-gray-600">Image</p>
                            <input
                                type="file"
                                className="w-full border"
                                ref={inputFileRef}
                                onChange={(e) => {
                                    setImageUpload(e.target.files[0]);
                                    if (e.target.files[0]) {
                                        setImageThumbnail({
                                            file: URL.createObjectURL(
                                                e.target.files[0]
                                            ),
                                        });
                                    } else {
                                        setImageThumbnail(null);
                                    }
                                }}
                            />
                            {imageThumbnail && (
                                <div className="relative flex flex-col items-end mt-4">
                                    {/* <div
                                        onClick={() => {
                                            inputFileRef.current?.form.reset();
                                            setImageUpload(null);
                                            setImageThumbnail(null);
                                        }}
                                        className="px-2 mt-4 mb-1 text-red-500 border cursor-pointer"
                                    >
                                        Remove image
                                    </div> */}
                                    <div className="absolute z-10 w-full h-full bg-gray-700/10" />
                                    <Icon
                                        onClick={() => {
                                            inputFileRef.current?.form.reset();
                                            setImageUpload(null);
                                            setImageThumbnail(null);
                                        }}
                                        className="absolute z-20 p-1 text-gray-600 bg-white border rounded-full cursor-pointer top-2 right-2 hover:bg-gray-100 w-9 h-9"
                                        icon="clarity:close-line"
                                    />
                                    <img
                                        src={imageThumbnail?.file}
                                        className="object-contain w-full h-64 border"
                                    />
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className={`px-6 py-1 w-full text-white bg-blue-500 active:ring ${
                                isLoading && "cursor-not-allowed active:ring-0"
                            }`}
                            disabled={isLoading}
                        >
                            {!isLoading ? "Post" : "Processing..."}
                        </button>
                    </form>
                </>
            )}
            <div className="p-8">
                <h2 className="mb-8 text-xl font-medium">Concerns</h2>
                <div className="">
                    {/* <form onSubmit={createAnnouncement} className="max-w-xl"> */}
                    {/* <div className="mt-6 mb-4">
                            <p className="mb-1 text-sm text-gray-600">Text</p>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                className="w-full px-3 py-2 border min-h-[100px]"
                                type="text"
                                placeholder="Text"
                            />
                        </div>

                        <div className="mb-8">
                            <p className="mb-1 text-sm text-gray-600">Image</p>
                            <input
                                type="file"
                                className="w-full border"
                                onChange={(e) => {
                                    setImageUpload(e.target.files[0]);
                                    setImageThumbnail({
                                        file: URL.createObjectURL(
                                            e.target.files[0]
                                        ),
                                    });
                                }}
                            />
                            {imageThumbnail && (
                                <img
                                    src={imageThumbnail?.file}
                                    className="object-contain w-20 h-20 my-4 bg-black border"
                                />
                            )}
                        </div> */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`px-6 py-1 text-white bg-blue-500 active:ring `}
                    >
                        Post concern
                    </button>

                    {/* <button
                            type="submit"
                            className={`px-6 py-1 text-white bg-blue-500 active:ring ${
                                isLoading && "cursor-not-allowed active:ring-0"
                            }`}
                            disabled={isLoading}
                        >
                            {!isLoading ? "Post announcement" : "Processing..."}
                        </button> */}
                    {/* </form> */}

                    <hr className="my-6" />
                    {/* <div className="flex items-center justify-between p-2 mb-4 border">
                        <p>Barangay</p>
                        <p>Text</p>
                        <p>Date</p>
                    </div> */}

                    <div className="flex flex-col">
                        {concerns?.map((concern, index) => {
                            let timestamp = concern.createdAt;
                            let date = new Date(timestamp);
                            let minutes = 0;

                            if (date.getMinutes() < 10) {
                                minutes = "0" + date.getMinutes();
                            } else {
                                minutes = date.getMinutes();
                            }

                            return (
                                <div
                                    key={index}
                                    onClick={() =>
                                        router.push(
                                            `/concern/${concern.id}`
                                        )
                                    }
                                    className="flex items-center justify-between px-4 py-3 mb-2 border cursor-pointer hover:shadow-md"
                                >
                                    <div>
                                        <p className="mr-8 font-medium">
                                            {concern.barangayName
                                                ? concern.barangayName
                                                : "GSO"}
                                        </p>
                                        <p className="max-w-4xl line-clamp-1">
                                            {concern.concernText}
                                        </p>
                                    </div>
                                    <p className="ml-8 text-gray-600 whitespace-nowrap">
                                        {date.toLocaleString("default", {
                                            month: "short",
                                        })}
                                        &nbsp;
                                        {date.getDate()}, {date.getFullYear()}
                                        &nbsp; - &nbsp;
                                        {date.getHours() <= 12
                                            ? [
                                                  date.getHours() == 0
                                                      ? "12"
                                                      : date.getHours(),
                                              ] +
                                              ":" +
                                              minutes +
                                              "AM"
                                            : [date.getHours() - 12] +
                                              ":" +
                                              minutes +
                                              "PM"}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default concerns;
