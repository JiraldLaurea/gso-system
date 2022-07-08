import { useRouter } from "next/router";
import React, { useState } from "react";
import useSWR, { mutate, useSWRConfig } from "swr";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Axios from "axios";
import Avatar from "react-avatar";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function Announcement() {
    const router = useRouter();
    const announcementId = router.query.announcementId;
    const [announcementImage, setAnnouncementImage] = useState();
    const [commentText, setCommentText] = useState();
    const { mutate } = useSWRConfig();

    const {
        data: announcement,
        error: errorAnnouncement,
        isValidating: isValidatingAnnouncement,
    } = useSWR(`http://localhost:3001/announcement/${announcementId}`);

    const {
        data: comments,
        error: errorComments,
        isValidating: isValidatingComments,
    } = useSWR(
        `http://localhost:3001/announcement/getcomments/${announcementId}`
    );

    const comment = async (e) => {
        e.preventDefault();
        if (commentText) {
            const data = {
                text: commentText,
            };
            await Axios.post(
                `http://localhost:3001/announcement/comment/${announcementId}`,
                data
            ).then((res) => {
                mutate(
                    `http://localhost:3001/announcement/getcomments/${announcementId}`
                );
                setCommentText("");
            });
        } else {
        }
    };

    let timestampAnnouncement = announcement?.createdAt;
    let dateAnnouncement = new Date(timestampAnnouncement);

    let minutes = 0;

    if (dateAnnouncement.getMinutes() < 10) {
        minutes = "0" + dateAnnouncement.getMinutes();
    } else {
        minutes = dateAnnouncement.getMinutes();
    }

    let dateMarkupAnnouncement = (
        <>
            {dateAnnouncement.toLocaleString("default", {
                month: "short",
            })}
            &nbsp;
            {dateAnnouncement.getDate()}, {dateAnnouncement.getFullYear()}
            &nbsp; - &nbsp;
            {dateAnnouncement.getHours() <= 12
                ? [
                      dateAnnouncement.getHours() == 0
                          ? "12"
                          : dateAnnouncement.getHours(),
                  ] +
                  ":" +
                  minutes +
                  "AM"
                : [dateAnnouncement.getHours() - 12] + ":" + minutes + "PM"}
        </>
    );

    return (
        <div className="flex flex-col w-full">
            <div className="p-8">
                <div className="flex items-center mb-4">
                    <Icon
                        onClick={() => router.back()}
                        icon="bx:arrow-back"
                        className="p-1 mr-2 border rounded-full cursor-pointer w-9 h-9"
                    />
                    <h2 className="text-xl font-medium ">
                        {announcement?.barangayName
                            ? announcement?.barangayName
                            : "GSO"}
                    </h2>
                </div>

                <p className="text-sm text-gray-600">
                    Posted on: {dateMarkupAnnouncement}
                </p>
                <p className="my-4">{announcement?.announcementText}</p>
                {announcement?.announcementImageUrl && (
                    <div className="w-full max-w-xl bg-black border ">
                        <Image
                            src={announcement.announcementImageUrl}
                            alt="announcement image"
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                        />
                    </div>
                )}

                <p className="mt-4 text-sm text-gray-600">
                    {comments?.length > 1 || comments?.length == 0
                        ? comments?.length + " comments"
                        : comments?.length + " comment"}
                </p>

                <hr className="my-4 " />

                <form onSubmit={comment} className="mb-6 ">
                    <p>Add a comment</p>
                    <input
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        type="text"
                        placeholder="Write a comment..."
                        className="w-full px-3 py-2 border"
                    />
                    <input type="submit" hidden />
                    {/* <button onClick={comment} className="border">
                    Comment
                </button> */}
                </form>

                <div className="space-y-4">
                    {comments?.map((comment, index) => {
                        let timestamp = comment.createdAt;
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
                                className="flex flex-col min-w-[180px]"
                            >
                                <div className="flex items-start mb-1">
                                    <Avatar
                                        name={comment.username}
                                        size={38}
                                        textSizeRatio={2}
                                        className="mr-2 rounded-full "
                                    />
                                    <div className="flex flex-col items-end">
                                        <div className="px-3 mb-1 py-2 border min-w-[180px] max-w-md">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="text-sm font-medium">
                                                    {comment.username}
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    {comment.barangayName
                                                        ? comment.barangayName
                                                        : "GSO"}
                                                </p>
                                            </div>

                                            <p>{comment.commentText}</p>
                                        </div>
                                        <p className="text-xs text-gray-600 ">
                                            {dayjs(comment.createdAt).fromNow()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Announcement;
