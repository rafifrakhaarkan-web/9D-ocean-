export interface Student {
  id: number;
  name: string;
}

export type AttendanceStatus = 'hadir' | 'sakit' | 'izin' | 'alpa' | null;

export interface AttendanceRecord {
  studentId: number;
  status: AttendanceStatus;
  date: string;
}

export interface DailyCash {
  studentId: number;
  days: boolean[]; // 5 days (Mon-Fri)
}

export interface MonthlyCash {
  studentId: number;
  amount: number;
}

export interface JournalEntry {
  id: string;
  date: string;
  subject: string;
  topic: string;
  notes: string;
}

export type Page = 'dashboard' | 'absen' | 'jurnal' | 'kas';
