import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');

  mobileMenuOpen = false;
  isSubmitting = false;
  formData = {
    name: '',
    email: '',
    message: ''
  };

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.closeMobileMenu();
  }

  onSubmit() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert('Please fill all fields');
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      alert('Message sent successfully!');
      this.formData = { name: '', email: '', message: '' };
      this.isSubmitting = false;
    }, 2000);
  }
  getSubmitText() {
    return this.isSubmitting ? 'Sending...' : 'Send Message';
  }
}