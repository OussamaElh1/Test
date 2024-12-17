import React, { useState } from "react";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    content: "",
    image: null,
  });
  const [isEditing, setIsEditing] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission (Add/Edit)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      setAnnouncements((prev) =>
        prev.map((item) => (item.id === formData.id ? formData : item))
      );
      setIsEditing(false);
    } else {
      setAnnouncements((prev) => [
        ...prev,
        { ...formData, id: Date.now() },
      ]);
    }

    setFormData({ id: null, title: "", content: "", image: null });
  };

  const handleEdit = (announcement) => {
    setFormData(announcement);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setAnnouncements((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-orange-600">
          Formulaire D'Annonce
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">
              {isEditing ? "Modifier l'Annonce" : "Créer une Annonce"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Annonce</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Description</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-2 border rounded-lg focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                {isEditing ? "Mettre à Jour" : "Créer"}
              </button>
            </form>
          </div>

          {/* Announcements Section */}
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-700">Liste des Annonces</h2>
            {announcements.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="bg-gradient-to-r from-white to-gray-100 border border-gray-200 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                  >
                    {/* Image */}
                    {announcement.image && (
                      <img
                        src={announcement.image}
                        alt="Annonce"
                        className="w-full h-48 object-cover"
                      />
                    )}
                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-2 text-gray-800">
                        {announcement.title}
                      </h3>
                      <p className="text-sm text-gray-600 break-words">
                        {announcement.content}
                      </p>
                      {/* Buttons */}
                      <div className="mt-4 flex justify-between">
                        <button
                          onClick={() => handleEdit(announcement)}
                          className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg shadow-sm transition-transform transform hover:scale-105"
                        >
                          Modifier
                        </button>
                        <button
                          onClick={() => handleDelete(announcement.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow-sm transition-transform transform hover:scale-105"
                        >
                          Supprimer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">Aucune annonce pour le moment.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
