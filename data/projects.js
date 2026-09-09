export const roles = {
  "ai-engineer": {
    number: "01",
    title: "AI / MACHINE LEARNING ENGINEER",
    shortTitle: "AI ENGINEER",
    icon: "🧠",
    description:
      "Building intelligent systems using Machine Learning, Computer Vision, Generative AI, RAG, and Large Language Models.",
  },

  "data-scientist": {
    number: "02",
    title: "DATA SCIENTIST",
    shortTitle: "DATA SCIENCE",
    icon: "📊",
    description:
      "Transforming raw data into insights, predictions, and data-driven solutions.",
  },

  "frontend-engineer": {
    number: "03",
    title: "FRONTEND / SOFTWARE ENGINEER",
    shortTitle: "FRONTEND",
    icon: "💻",
    description:
      "Creating interactive, responsive, and functional digital experiences.",
  },
};

export const projects = [
  {
    title: "Auto Grading API",
    slug: "auto-grading-api",
    role: "ai-engineer",
    category: "AI / MACHINE LEARNING ENGINEER",
    shortDescription:
      "An automated grading system using RAG and LLM-based evaluation.",
    description:
      "An automated student assignment grading system powered by Retrieval-Augmented Generation and Large Language Models.",
    tech: [
      "Python",
      "RAG",
      "LLM",
      "SentenceTransformer",
      "FAISS",
      "FastAPI",
      "Gemini",
      "LangChain",
    ],
    image: "/images/auto-grading.jpg",
    githubUrl: "https://github.com/aura-capstone-project/aura-ai",
    contribution: [
      "Developed the RAG pipeline for processing student assignments.",
      "Implemented semantic search using SentenceTransformer and FAISS.",
      "Developed an LLM-based grading pipeline.",
      "Configured chunk size, chunk overlap, and top-k retrieval.",
      "Structured grading results using JSON rubrics.",
      "Integrated the AI pipeline with FastAPI.",
    ],
  },

  {
    title: "Isi Piringku",
    slug: "isi-piringku",
    role: "ai-engineer",
    category: "AI / COMPUTER VISION",
    shortDescription:
      "Food segmentation and analysis using YOLOv8 Image Segmentation.",
    description:
      "A computer vision system that analyzes food components on a plate using YOLOv8 segmentation.",
    tech: [
      "Python",
      "YOLOv8",
      "Computer Vision",
      "PyTorch",
      "Roboflow",
      "FastAPI",
    ],
    image: "/images/isi-piringku.jpg",
    githubUrl: "https://github.com",
    contribution: [
      "Prepared and integrated the food segmentation dataset.",
      "Trained YOLOv8n-seg for food segmentation.",
      "Evaluated the model using Precision, Recall, and mAP.",
      "Developed an inference pipeline.",
      "Analyzed food composition based on segmentation results.",
      "Integrated the model with FastAPI.",
    ],
  },

  {
    title: "Animal Image Classification",
    slug: "animal-image-classification",
    role: "ai-engineer",
    category: "AI / DEEP LEARNING",
    shortDescription:
      "CNN-based image classification for cats, dogs, and tigers.",
    description:
      "A Deep Learning project using Convolutional Neural Networks to classify animal images.",
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "Deep Learning",
    ],
    image: "/images/animal-classification.jpg",
    githubUrl: "https://github.com",
    contribution: [
      "Prepared the image dataset.",
      "Performed preprocessing and augmentation.",
      "Designed the CNN architecture.",
      "Implemented EarlyStopping.",
      "Trained the classification model.",
      "Evaluated results using accuracy and confusion matrix.",
    ],
  },

  {
    title: "Book Recommendation System",
    slug: "book-recommendation-system",
    role: "data-scientist",
    category: "DATA SCIENCE / MACHINE LEARNING",
    shortDescription:
      "Book recommendation system using Content-Based and Collaborative Filtering.",
    description:
      "A recommendation system that combines book metadata and user interactions.",
    tech: [
      "Python",
      "Pandas",
      "TF-IDF",
      "Cosine Similarity",
      "TensorFlow",
      "Keras",
    ],
    image: "/images/book-recommendation.jpg",
    githubUrl: "https://github.com",
    contribution: [
      "Performed data exploration and preprocessing.",
      "Built Content-Based Filtering using TF-IDF.",
      "Implemented Cosine Similarity.",
      "Developed Collaborative Filtering.",
      "Implemented embedding-based recommendations.",
      "Compared model performance using RMSE.",
    ],
  },

  {
    title: "Stunting Risk Classification",
    slug: "stunting-risk-classification",
    role: "data-scientist",
    category: "DATA SCIENCE",
    shortDescription:
      "Machine Learning model for predicting stunting risk.",
    description:
      "A classification project that predicts stunting status based on demographic and growth features.",
    tech: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "XGBoost",
      "SMOTE",
    ],
    image: "/images/stunting.jpg",
    githubUrl: "https://github.com",
    contribution: [
      "Performed Exploratory Data Analysis.",
      "Cleaned duplicate and invalid data.",
      "Handled outliers using IQR.",
      "Applied feature scaling.",
      "Used SMOTE for class imbalance.",
      "Compared multiple machine learning models.",
    ],
  },

  {
    title: "Student Performance Clustering",
    slug: "student-performance-clustering",
    role: "data-scientist",
    category: "DATA SCIENCE",
    shortDescription:
      "Student segmentation using K-Means Clustering and PCA.",
    description:
      "An unsupervised learning project for grouping students based on academic performance.",
    tech: [
      "Python",
      "Pandas",
      "K-Means",
      "PCA",
      "Scikit-learn",
    ],
    image: "/images/student-clustering.jpg",
    githubUrl: "https://github.com",
    contribution: [
      "Prepared student performance features.",
      "Implemented K-Means Clustering.",
      "Used Elbow Method.",
      "Used Silhouette Score.",
      "Applied PCA for dimensionality reduction.",
      "Visualized clustering results.",
    ],
  },

  {
    title: "Bike Sharing Analysis",
    slug: "bike-sharing-analysis",
    role: "data-scientist",
    category: "DATA SCIENCE / DATA ANALYSIS",
    shortDescription:
      "Exploratory analysis and interactive dashboard for bike-sharing rental patterns.",
    description:
      "An end-to-end analysis of Capital Bikeshare usage in Washington, D.C. during 2011 and 2012, covering data cleaning, exploration, visualization, and an interactive Streamlit dashboard.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "Jupyter Notebook",
    ],
    image: "/project-preview/dashboardsepeda.png",
    githubUrl: "https://github.com/desssti06/desti-bike-sharing-analysis",
    contribution: [
      "Cleaned and prepared daily and hourly Bike Sharing datasets for analysis.",
      "Performed exploratory data analysis (EDA) to identify rental patterns across seasons, days, weather, and time categories.",
      "Analyzed rental trends and compared usage patterns between 2011 and 2012.",
      "Compared average rentals across weekdays and weekends.",
      "Analyzed the impact of weather conditions, temperature, and humidity on bike rental demand.",
      "Created data visualizations using Matplotlib and Seaborn to communicate key findings.",
      "Developed an interactive Streamlit dashboard with filters for season, day type, weather, and date range.",
    ],
  },

  {
    title: "Online Test Application",
    slug: "online-test-application",
    role: "frontend-engineer",
    category: "FRONTEND DEVELOPMENT",
    shortDescription:
      "Interactive and responsive online test application.",
    description:
      "A frontend application for online testing with dashboards and test result pages.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
    ],
    image: "/project-preview/onlinetest.png",
    githubUrl: "https://github.com/diefordie/frontend-etam-test",
    contribution: [
      "Developed the application interface.",
      "Built responsive layouts.",
      "Developed the dashboard.",
      "Created test category pages.",
      "Created test result pages.",
      "Implemented navigation between pages.",
    ],
  },

  {
    title: "Employee Management System",
    slug: "employee-management-system",
    role: "frontend-engineer",
    category: "SOFTWARE ENGINEERING",
    shortDescription:
      "Web application for managing employee activities and information.",
    description:
      "A role-based Employee Management System for HR and employees.",
    tech: [
      "React.js",
      "React Router",
      "JavaScript",
      "CSS",
    ],
    image: "/project-preview/staffio.png",
    githubUrl: "https://github.com/alcynx/tubes-desweb",
    contribution: [
      "Developed the application interface.",
      "Implemented routing.",
      "Built dashboard pages.",
      "Developed attendance features.",
      "Created announcement pages.",
      "Implemented React Context state management.",
    ],
  },

  {
    title: "Lens Simulation",
    slug: "simulasi-cermin",
    role: "frontend-engineer",
    category: "FRONTEND / PYTHON",
    shortDescription:
      "Interactive optical simulation for visualizing image formation in concave and convex mirrors.",
    description:
      "A Python and Pygame learning application that visualizes mirror image formation, special rays, and real-time optical calculations.",
    tech: [
      "Python",
      "Pygame",
      "Computer Graphics",
      "Interactive Simulation",
    ],
    image: "/project-preview/lens simulation.png",
    githubUrl: "https://github.com/desssti06/lens-simulation",
    contribution: [
      "Built the main menu for selecting concave and convex mirror simulations.",
      "Visualized objects, images, coordinate axes, focal points, and centers of curvature.",
      "Implemented real-time calculations for image distance and image height.",
      "Added interactive inputs for object distance, object height, and focal length.",
      "Created a simple car illustration for the object and its image.",
      "Added keyboard controls for adjusting simulation values and closing the window.",
    ],
  },

  {
    title: "Lucky Wheel",
    slug: "lucky-wheel",
    role: "frontend-engineer",
    category: "FRONTEND / JAVASCRIPT",
    shortDescription:
      "Interactive Lucky Wheel simulation using JavaScript.",
    description:
      "A dynamic spinning wheel application with randomized options and animations.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "Animation",
    ],
    image: "/project-preview/lucky wheel.png",
    githubUrl: "https://github.com/desssti06/lucky-wheel",
    contribution: [
      "Built the HTML structure.",
      "Developed randomization logic.",
      "Created dynamic spinning animation.",
      "Implemented button interaction.",
      "Designed the interface using CSS.",
    ],
  },
];