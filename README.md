# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS. This portfolio showcases your projects, skills, and experience in a clean and professional manner.

## Features

- Responsive design that works on all devices
- Clean and modern UI with Tailwind CSS
- Project showcase with filtering capabilities
- Contact form with EmailJS integration
- Downloadable resume section
- About me section with skills and experience
- Social media integration

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- EmailJS for contact form
- Framer Motion for animations

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:

   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

1. Update your personal information in the following files:
   - `src/app/page.js`: Update the hero section with your name and title
   - `src/app/about/page.js`: Update the biography and skills
   - `src/app/resume/page.js`: Update your resume content
   - `src/app/contact/page.js`: Update contact information and social media links

### Projects

1. Edit the projects array in `src/app/projects/page.js` to showcase your work:
   ```javascript
   const projects = [
     {
       title: "Project Title",
       description: "Project description",
       technologies: ["Tech1", "Tech2"],
       image: "/projects/project-image.jpg",
       github: "https://github.com/yourusername/project",
       demo: "https://project-demo.com",
     },
     // Add more projects...
   ];
   ```

### Styling

1. The color scheme can be customized in `src/app/globals.css`:

   ```css
   :root {
     --primary-color: #0d6efd;
     --secondary-color: #6c757d;
     --accent-color: #ffc107;
   }
   ```

2. Additional custom styles can be added to the `@layer components` section in `globals.css`.

### Images

1. Add your project images to the `public/projects` directory
2. Update the image paths in the projects array
3. Add your resume PDF to the `public` directory as `resume.pdf`

## Deployment

The easiest way to deploy your portfolio is using Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in the Vercel project settings
4. Deploy!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
