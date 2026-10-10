import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL || "";

export async function createInquiry(payload) {
  try {
    const response = await axios.post(`${apiBaseUrl}/api/inquiries`, payload);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "We could not send your enquiry. Please try again.");
  }
}

export async function getProjects() {
  const response = await axios.get(`${apiBaseUrl}/api/projects`);
  return (response.data.data || []).map((project) => {
    const imageUrl = (value, width, crop) => {
      if (!value) return value;
      const url = value.startsWith("/") ? `${apiBaseUrl}${value}` : value;
      if (!url.includes("res.cloudinary.com/") || !url.includes("/image/upload/")) return url;
      return url.replace("/image/upload/", `/image/upload/f_auto,q_auto,w_${width},${crop}/`);
    };
    return {
      ...project,
      image: imageUrl(project.image, 1200, "c_limit"),
      avatar: imageUrl(project.avatar, 160, "c_fill,g_face"),
    };
  });
}

export async function createProject(formData) {
  try {
    const response = await axios.post(`${apiBaseUrl}/api/projects`, formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Could not save this profile. Please try again.");
  }
}
