import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule,NgIf],
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

  onSubmit(contactForm: any) {
    console.log(contactForm.value);
    if (!contactForm.value.name || !contactForm.value.email || !contactForm.value.message) {
      alert('Please fill all fields');
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      alert('Message sent successfully!');
      contactForm.value = { name: '', email: '', message: '' };
      this.isSubmitting = false;
    }, 2000);
  }
  getSubmitText() {
    return this.isSubmitting ? 'Sending...' : 'Send Message';
  }
}